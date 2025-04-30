<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'phone' => 'required'
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        return response()->json(['message' => 'Usuario creado correctamente']);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Credenciales incorrectas'], 401);
        }

        // Generar token (ejemplo básico usando Laravel token personalizado)
        $token = bin2hex(random_bytes(32));

        $cookie = cookie(
            'token',        // nombre
            $token,         // valor
            60,             // minutos
            null,           // ruta
            null,           // dominio
            false,          // secure: true en producción con HTTPS
            true,           // httpOnly
            false,          // raw
            'Strict'        // SameSite
        );

        return response()->json(['message' => 'Inicio de sesión exitoso', 'token' => $token])->withCookie($cookie);
    }
    public function logout()
    {
        // Borrar cookie
        $cookie = Cookie::forget('token');
        return response()->json(['message' => 'Sesión cerrada'])->withCookie($cookie);
    }
}

