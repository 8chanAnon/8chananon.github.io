
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.Charset;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

class auth8kun
{
  public static void main (String[] args) throws Exception
  {
    System.out.print("8kun Authenticator - ");
    String token = "{\"token\":\"" + getToken() + "\"}";
    token = getNumber(token); if (token.length() != 7) token = "error";
    token = "result: " + token; System.out.println(token);
  }

  static String getToken () throws Exception
  {
    String appToken = "Je44n4mNaNqbdj3nsk3bHeb56mdMen49sk3k";
    String password = "n4nebdLwmUedniqNebldnI3em3Nerkdd";
    String deviceID = "d50cdb5ce8d055a3";

    long t = System.currentTimeMillis() / 1000L;
    String msg = appToken + "|||" + deviceID + "|||" + t;
    Charset utf8 = Charset.forName("UTF-8");

    byte[] bytes = password.getBytes(utf8);
    SecretKeySpec secretKeySpec = new SecretKeySpec(bytes, "AES");
    bytes = password.substring(0, 16).getBytes(utf8);

    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(1, secretKeySpec, new IvParameterSpec(bytes));
    bytes = cipher.doFinal(msg.getBytes(utf8));

    return (Base64.getEncoder().encodeToString(bytes));
  }

  static String getNumber (String token) throws Exception
  {
    URL url = new URL("https://auth.128ducks.com/auth/xMtkntWveZiCCC");
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();

    conn.setRequestMethod("POST");
    conn.setRequestProperty("Accept", "application/json");
    conn.setRequestProperty("Content-Type", "application/json");
    conn.setDoOutput(true);

    OutputStream ostream = conn.getOutputStream();
    byte[] data = token.getBytes("utf-8");
    ostream.write(data, 0, data.length);			

    if (conn.getResponseCode() != 200) return ("");
    InputStream istream = conn.getInputStream();
    
    int ch; StringBuilder sb = new StringBuilder();
    while ((ch = istream.read()) != -1) sb.append((char) ch);

    return (sb.toString().replaceAll("\\D", ""));
  }
}
