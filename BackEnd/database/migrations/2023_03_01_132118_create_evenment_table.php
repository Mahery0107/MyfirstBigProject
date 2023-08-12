<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvenmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evenment', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('descriptions');
            $table->longText('descriptions2');
            $table->string('images_videos');
            $table->integer('coms');
             $table->integer('likes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evenment');
    }
}
