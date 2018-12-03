insert into orders(cust_id, date_added, price, items, stripe_id)
values(($1), now(), ($2), ($3), ($5));

select * from orders
where cust_id = ($4);