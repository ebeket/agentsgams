
<div align="center">
  <img src="https://raw.githubusercontent.com/agentsgams/.github/refs/heads/main/header.png">
  <p><i>Started since late 2023, <b>agents gams</b> is a unblocked games service.</i></p>
  <p style="font-size:10px"><i>You have chosen, or been chosen, to relocate to one of our finest remaining project sites. I thought so much of agents gams that I elected to establish my Administration here, in the Hub World so thoughtfully provided by Our Benefactors. I have been proud to call agents gams my home. And so, whether you are here to stay, or passing through on your way to parts unknown, welcome to agents gams. It's safer here.</i></p>
</div>

agents gams is a simple, but effective game website that focuses more on the community rather than competition. The project is owned by one person and anybody can collaberate. Anybody is also allowed to create pull requests and add games. You can do that by reading the "Contributing" section.

> [!TIP]
> If you use/fork this project, please give it a star in the [original repository](https://github.com/agentsgams/agentsgams.github.io)!

**Also, be sure to join the Discord community for support, links, and to communicate with others/agentn86.**

[<img src="https://raw.githubusercontent.com/agentsgams/agentsgams.github.io/refs/heads/main/assets/img/disc.png">](https://discord.gg/AMAA6tkysF)

## Deployment

Firstly, clone the project

```bash
  git clone https://github.com/agentsgams/agentsgams.github.io.git
```

Go to the project directory

```bash
  cd agentsgams.github.io
```
*(or whatever it's titled for you)*

And just open the file with Visual Studio code, or with your code editor.

```bash
  code
```

This is all pure HTML, JS, and CSS so no dependencies are required or a full stack website.

If you decide to use some code from agents gams (which, why should you), you should check out the license. It has some great information of what you can or cannot do.

## Contributing

> [!IMPORTANT]
> Do not contribute in the "old.js"! A new update will now allow games to be added via the JSON file (found in assets/json/projects.json) instead of a long function. **I recommend you do not contribute until then!**

Contributions are always welcome! We always need a new game or feature added to keep the community strong. Add game files to the [projects repository](https://github.com/agentsgams/projects) and add the game information in the [JSON file](./assets/json/projects.json). ALSO- be sure to make a XML version and make the file the same name as the projects folder in [this repository](https://github.com/agentsgams/projectsxml).

**For example:** adding a project titled "example" should have the game files in the projects repository, linked in the JSON file:

```json
  {"name": "example", "formal": "Example", "description": "is an example..", "image": "example.png", "color": "white", "link": "example"}
```

As well, make sure to make the project folder (in this case "example") the same as the XML version using CDATA. So `example/` should be the same as `example.xml`.