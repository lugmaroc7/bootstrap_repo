<!-- <?php

// $a = 1; 

// $b = "i am a string";

// $c = true;

// $d = null;


// const PI = 3.142;


// define('API','https://api.eazyalerts.com');

// API.'posts';

// print(PI);

// echo $a;

// $num1 = 5;

// $num1 /= 5;
// $num1 += 5;

// $num1 -= 5;

// print($num1);


// $string1 = "I am a fine";

// $string1 .= " boy";

// $string2 = " boy";


// $string3 = $string1 . $string2;


// print($string1);

// $arr1 = [0 =>'one', 2=>'two',3=>'three'];
// $arr2 = [0=>'one',0=>'two',"3"=>'three'];


// print($arr1 == $arr2);

// print($arr1 === $arr2);



//Ternary operator
// $value =  true? "the statement is true \n" : "the state is false\n"; 

// echo $value;

// Null coalescing
// $value = null ?? 'kodes \n';
// echo $value;

// $str = 'Some string';

// $length = strlen($str);

// $count = str_word_count($str);

// echo $length;
// echo "\n";

// echo $count;

// echo "\n";


// $replaced = str_replace("string", "number", $str);

// echo $length;
// echo "\n";
// echo $count;
// echo "\n";
// echo $replaced;
// echo "\n";

// $num = "1";

// var_dump(is_numeric($num));

// echo PHP_FLOAT_MAX;

// echo (int) $num;

// echo "\n\n\n\n\n\n";

// echo rand(0,9);



// ?> -->

<?php
function familyName(string $firstname, string $lastname= 'Akpoguma')
{

echo "$firstname $lastname";

}

function sum(int $num1, int $num2)
{
return $num1 + $num2;
}


$genderString = "I am a ";

function female($str){

    $str .= "female";
}

function male(&$str)
{
$str .= "male";

}

female($genderString);
male($genderString);

echo $genderString . "<br>";

// $num1 = 10;
// $num2 = 30;
// echo "The initial value of the variable is: $number <br>";
// function increment(&$number){
// $number++;
//     echo "The modified value is: $number <br>";
// }


// increment($number);

// echo "After the function call $number <br>";





?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

<!-- <?php echo "Hello world <br>"; ?> -->


<h1>Family</h1>
<ul>
    <li> <?php familyName("Lugard"); ?> </li>
    <li> <?php familyName("Emmanual"); ?> </li>
    <li> <?php familyName("Paulinus"); ?> </li>
    <li> <?php familyName("Ebimene"); ?> </li>
    <li> <?php familyName("Ovie"); ?> </li>
    <li> <?php familyName("Innocent", "Elayefa"); ?> </li>
</ul>

<p>The sum of 5 and 10 is: <?php echo sum(5, 10); ?></p>
<p>The sum of 20 and 100 is: <?php echo sum(20, 100); ?></p>
<p>The sum of 50 and 70 is: <?php echo sum(50, 70); ?></p>




<!-- <?php familyName("mane"); ?> -->
    
</body>


</html>