class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('h1')
      title.html("CAR RACING GAME");
      title.position(150,50);
      
      var input = createInput("");
      var button = createButton('PLAY');
     
      
      input.position(150,150);
      button.position(150,200);

      button.mousePressed(function()
                          {
                                input.hide();
                                button.hide();
  
                                var name =input.value();

                                playerCount=playerCount+1;

                               player.updateName(name);
                               player.updateCount(playerCount);

                                var greeting = createElement('h3');
                                greeting.html("Hello " +name);
                                greeting.position(150,100);
                         });

    }
}
