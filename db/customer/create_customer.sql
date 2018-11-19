insert into customer_info( is_admin, cust_first_name, cust_last_name, email, cust_hash)
values( false, $1, $2, $3, $4)
returning *;