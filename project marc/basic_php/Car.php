<?php


class Car
{
    public $name;
    public $color;
    const MESSAGE = ' na you know ';

    function __construct($name, $color)
    {
    $this->name = $name;
    $this->color = $color;
    
    }

    public function get_name() 
    {

    return $this->name;
    }

private function get_color()
{
return $this->color;
}

public function show_color()
{
    return $this->get_color();
}
}



class Benz extends Car
{
public $model;

    function __construct($name, $color, $model)
    {
    $this->name = $name;
    $this->color = $color;
    $this->model = $model;
    
    }
public function print_color()
{
return $this->show_color();
}
public function get_model()
{
return $this->model;
}
}
 echo Benz::MESSAGE;
$benz = new Benz('Mercedes', 'Red', '2022');

echo $benz->print_color();

$benz->model = ' 2011 ';

echo $benz->get_model();
 



// $benz = new Car(' Mercedes Benz ', ' Cream ');

// echo 'The name of my favourite car is:' .$benz->get_name() . 'and I love it to be in' . $benz->show_color() . 'color';


    


// $volvo = new Car('Volvo', 'Red');

// echo $volvo->get_name();
// echo "This my car is" . $volvo->get_name();
// echo "<br>";
// echo $volvo->get_color();


?>