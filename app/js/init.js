

  var gui = require('nw.gui');
  console.log('init app called');

  let win = gui.Window.get();

  onload = function () {
    window.location.href = "http://iheartradio.com"
  };

  win.on('close', function () {
    gui.App.quit();
  });

  win.on('minimize', function () {
    console.log('minimize called');

    if (typeof gui.Tray == 'undefined') {
      return;
    }

    win.hide();

    let tray = new gui.Tray({
      title: 'Web Music Player',
      icon: 'img/music.png'
    });

    let menu = new gui.Menu();
    let exit = new gui.MenuItem({
      type: "normal",
      label: "Exit",
      click: function () {
        console.log("We're closing...");
        gui.App.quit();
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

