UPDATE customer_info
SET
address_1 = $1,
address_2 = $2,
city = $3,
"state" = $4,
zip = $5

WHERE email = $6

returning *;