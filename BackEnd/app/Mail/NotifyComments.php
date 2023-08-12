<?php

namespace App\Mail;

use App\Models\Header;
use App\Utils\NotificationCommentsData;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotifyComments extends Mailable
{
    use Queueable, SerializesModels;


    public $data = [];

    public function __construct(array $data)
    {
        $this->data = $data;
    }




public function build()
{

    return $this->from($this->data['email'], 'Example')
                ->view('email.notifycomments');
}
}
