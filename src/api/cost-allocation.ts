import { db } from '../db/mock-db.ts';

/** Populated by the auth middleware from the caller's session. */
export interface AuthContext {
  userId: string;
  accountId: string;
}

export interface AllocationRequestBody {
  accountId: string;
  targetTeam: string;
  reason: string;
}

export interface AllocationSummary {
  assignedRowIds: string[];
  totalAssignedUSD: number;
  targetTeam: string;
}

/** Assigns every untagged cost in an account to one team. */
export async function allocateUntaggedCosts(
  auth: AuthContext,
  req: AllocationRequestBody,
): Promise<AllocationSummary> {
  const rows = await db.findUntaggedCosts(req.accountId);

  const assignedRowIds: string[] = [];
  let totalAssignedUSD = 0;

  for (const row of rows) {
    await db.assignCostToTeam(row.id, req.targetTeam);
    assignedRowIds.push(row.id);
    totalAssignedUSD += row.cost;
  }

  await db.insertAuditEntry({
    accountId: auth.accountId,
    actorId: auth.userId,
    targetTeam: req.targetTeam,
    assignedRows: assignedRowIds.length,
    totalUSD: totalAssignedUSD,
    reason: req.reason,
  });

  return { assignedRowIds, totalAssignedUSD, targetTeam: req.targetTeam };
}
