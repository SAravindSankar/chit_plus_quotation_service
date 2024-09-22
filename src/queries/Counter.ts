export const getConterQuery = (companyId: number, branchId: number) => `
 select
        counterpk,
        location,
        section 
    from
        mas_counter 
    where
        delflag is null  
        and active ='Y' 
        and COMPANYFK = ${companyId}
        and branchfk = ${branchId}
        and trim(upper(location)) like '%' 
    order  by
        location 
`;
