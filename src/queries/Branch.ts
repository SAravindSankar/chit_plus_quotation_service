export const getBranchesQuery = (companyName: string) => `
SELECT 
  b.branchpk,
  DECODE(NVL(b.code, '0'), '0', b.name, b.code || '-' || b.name) as name,
  c.name as company_name,
  c.companypk  
FROM 
  mas_company c,
  mas_branch b  
WHERE 
  b.delflag IS NULL  
  AND c.delflag IS NULL  
  AND UPPER(DECODE(NVL(b.code, '0'), '0', b.name, b.code || '-' || b.name)) LIKE ${
    companyName ? "UPPER('%" + companyName + "%')" : "'%'"
  }  
  AND b.companyfk = c.companypk 
ORDER BY 
  DECODE(NVL(b.code, '0'), '0', b.name, b.code)
`;
