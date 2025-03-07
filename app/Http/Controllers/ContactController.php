<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function show()
    {
        return view('contact');
    }

    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        Mail::raw($request->message, function ($mail) use ($request) {
            $mail->to('admin@example.com')
                ->from($request->email, $request->name)
                ->subject('Nouveau message de contact');
        });

        return back()->with('success', 'Message envoyé avec succès !');
    }
}
