var str = "საქართველოში მარკეტინგი და";

if ( str.indexOf('მარკეტინგი') !== -1 || str.indexOf('რეკლამა') !== -1 || str.indexOf('ვირუსი') !== -1 )
{
    alert('შეიცავს')
}
else{
    alert(' ar შეიცავს')
}
// alert( str.indexOf("მარკეტინგი") ); // 1
// alert( str.indexOf("რეკლამა") ); // 11
// alert( str.indexOf("ვირუსი") ); // -1
