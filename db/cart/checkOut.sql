insert into orders(cust_id, date_added, price, items)
values(($1), now(), ($2), ($3));

select * from orders
where cust_id = ($4);