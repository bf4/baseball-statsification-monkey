              var g = new Bluff.Line('graph', "1000x600");
      g.theme_37signals();
      g.tooltips = true;
      g.title_font_size = "24px"
      g.legend_font_size = "12px"
      g.marker_font_size = "10px"

        g.title = 'Cane: code quality threshold violations';
        g.data('cane', [44,41]);
        g.labels = {"0":"3/14","1":"3/15"};
        g.draw();
