
import { NextResponse } from 'next/server';
import { createClient } from "../../../utils/supabase/server";
import { cookies } from 'next/headers';
 

function generate_token(length){
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}


export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as any;
  const cookieStore = await cookies();

  let cookie = cookieStore.get('re_fw')?.value;
  if (cookie === undefined) {
    cookie = generate_token(32);
    cookieStore.set('re_fw', cookie);
  }
 
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase.from("events").insert({
      url: body.url,
      token: cookie,
    }).select();

    console.log('ERROR', error, data);

    return NextResponse.json({
      yes: true
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}
