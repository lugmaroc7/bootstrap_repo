<?php

trait Notifiable {
public function notify($message)
{

echo $message;

}

}

class SMS
{
use Notifiable;
}

class Email
{
    use Notifiable;
}

class PushNotification
{
    use Notifiable;
}

$sms = new SMS();
$sms->notify("We are doing a promo, dial *15262*12# to stand a chance to win a brand new Car.");

echo '<br>';
$Email = new Email();
$Email->notify("We are doing a promo, dial *15262*12# to stand a chance to win a Duplex.");

echo '<br>';
$PushNotification = new PushNotification();
$PushNotification->notify("We are doing a promo, dial *15262*12# to stand a chance to win a Flat.");

?>