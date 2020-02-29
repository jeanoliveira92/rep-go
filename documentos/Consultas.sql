SELECT name, type, ST_AsText(geom) FROM public."POINTS" where name is not null order by type;

SELECT name, type, ST_AsText(ST_Centroid(geom)) FROM public."BULDINGS" where name is not null and type not in ('apartments', 'garage', 'hotel', '"place of worship"', 'residential', 'school', 'temple', 'university', 'chapel', 'church', 'community centre', 'fast food', 'greenhouse', 'roof') order by type;