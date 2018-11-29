insert into cart(product_id, cust_id, qty)
values($1, $2, $3);

select 
cart.product_id as product_id, 
cart.cust_id as cust_id, 
cart.qty as qty, 
brand_list.brand as brand, 
product_list.product_name as product_name, 
product_list.price as price,
product_list.size as size, 
product_list.image_url as image_url

from cart 

left join product_list
on product_list.product_id = cart.product_id

left join brand_list 
on brand_list.brand_id = product_list.brand_id

where cart.cust_id = ($4);