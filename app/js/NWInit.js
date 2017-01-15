var gui = require('nw.gui');

  console.log('init app called');

  let win = gui.Window.get();

  onload = function () {
    window.location.href = "http://iheartradio.com"
  };

  win.on('minimize', function () {
    let that = this
    console.log('minimize called');

    if (typeof gui.Tray == 'undefined') {
      return;
    }

    win.hide();

    let tray = new gui.Tray({
      title: 'Web Music Player',
      icon: 'img/music.png'
    });

     let menu = new nw.Menu();
     let exit = new nw.MenuItem({
       type: "normal",
       label: "Exit",
       click: function () {
        that.hide(); // Pretend to be closed already
        console.log("We're closing...");
        that.close(true);
       },
       key: "s",
       modifiers: "ctrl-alt",
     });

    menu.append(exit);
    tray.menu = menu;

    tray.on('click', function () {
      console.log('tray clicked');

      win.show();

      tray.remove();
      tray = null;
    });
  });
