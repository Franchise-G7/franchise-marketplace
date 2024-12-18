<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserImagesTable extends Migration
{
    public function up()
    {
        Schema::create('user_images', function (Blueprint $table) {
            $table->id();
            $table->string('image_path');
            $table->enum('image_type', ['profile', 'brand', 'other']); // You can add more image types as needed
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key referencing the users table
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_images');
    }
}
