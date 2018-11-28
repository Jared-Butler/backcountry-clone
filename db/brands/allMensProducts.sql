select product_id, brand, product_name, qty, price, size, activity, image_url, gender, description
from product_list
left join brand_list
on brand_list.brand_id = product_list.brand_id
where gender = 'm'
order by product_id;