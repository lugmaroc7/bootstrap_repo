<?php

class Fruit
{

public $name;
public $color;


function set_name($name)
{
    $this->name = $name;
}

function get_name()
{
    return $this->name;
}



function set_color($color)
{
    $this->color = $color;
}

function get_color()
{
    return $this->color;
}

}

$apple = new Fruit();
$apple->set_name("Apple");
$apple->set_color('Green');

echo 'The name is:' .$apple->get_name();
echo'<br>';
echo 'The color is:' . $apple->get_color();
// echo $apple->get_name();
$guava = new Fruit();
$guava->set_name('Guava');
$guava->set_color('Green');

echo'<br>';

echo 'The name is: ' . $guava->get_name();
echo '<br>';
echo 'The color is:' . $guava->get_color();

// print "<br>";
// $orange = new Fruit();
// $orange->set_name("Orange");
// echo $orange->get_name();



?>