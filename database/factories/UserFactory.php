<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'page admin',
            'email' => 'enginerdshouseyourday@gmail.com',
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('wagkalimutan143'),
            'remember_token' => Str::random(10),
            'usertype' => 'Admin',

            'phone' => '09123456789',
            'birthdate' => '1999-01-01',
            'address' => 'Davao City',
            'gender' => 'Male',
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
