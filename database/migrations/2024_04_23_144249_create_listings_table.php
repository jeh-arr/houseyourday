<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(User::class);
            $table->string('property_name');
            $table->string('property_address');
            $table->string('price');
            $table->string('availability');
            $table->integer('rooms')->nullable();
            $table->string('description')->nullable();
            $table->string('permit')->nullable();
            $table->string('status')->nullable();
            $table->json('image')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listings');
    }
};
