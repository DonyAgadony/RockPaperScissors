using System.Net;
using System.Text.Json;
using System.Text;



class Player(string name, int points)
{
    public string Name { get; set; } = name;

    public int Points { get; set; } = points;

}

class Program
{
    public static void Main()
    {
        HttpListener listener = new();
        listener.Prefixes.Add("http://*:5000/");
        listener.Start();
        Player[] players = [];



        Console.WriteLine("Server started. Listening for requests...");
        Console.WriteLine("Main page on http://localhost:5000/website/index.html");




        while (true)
        {
            HttpListenerContext context = listener.GetContext();
            HttpListenerRequest request = context.Request;
            HttpListenerResponse response = context.Response;




            string rawPath = request.RawUrl!;
            string absPath = request.Url!.AbsolutePath;


            Console.WriteLine($"Received a request with path: " + rawPath);


            string filePath = "." + absPath;
            bool isHtml = request.AcceptTypes!.Contains("text/html");




            if (File.Exists(filePath))
            {
                byte[] fileBytes = File.ReadAllBytes(filePath);
                if (isHtml) { response.ContentType = "text/html; charset=utf-8"; }
                response.OutputStream.Write(fileBytes);
            }
            else if (isHtml)
            {
                response.StatusCode = (int)HttpStatusCode.Redirect;
                response.RedirectLocation = "/website/404.html";
            }
            else if (absPath == "/addPlayer")
            {
                string playerString = GetBody(request);
                Console.WriteLine(playerString);
                Player player = JsonSerializer.Deserialize<Player>(playerString)!;
                players = [.. players, player];
            }
            else if (absPath == "/getPlayers")
            {
                string jsonString = JsonSerializer.Serialize(players);
                byte[] jsonBytes = Encoding.UTF8.GetBytes(jsonString);
                response.OutputStream.Write(jsonBytes);
            }


            response.Close();
        }
    }
    public static string GetBody(HttpListenerRequest request)
    {
        return new StreamReader(request.InputStream).ReadToEnd();
    }

}

