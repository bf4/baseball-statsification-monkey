              var g = new Bluff.Line('graph', "1000x600");
      g.theme_37signals();
      g.tooltips = true;
      g.title_font_size = "24px"
      g.legend_font_size = "12px"
      g.marker_font_size = "10px"

        g.title = 'Reek: code smells';
        g.data('DuplicateMethodCall', [7]);
g.data('ClassVariable', [1]);
g.data('IrresponsibleModule', [4]);
g.data('FeatureEnvy', [11]);
g.data('UtilityFunction', [5]);
g.data('NestedIterators', [2]);
g.data('UncommunicativeVariableName', [5]);
g.data('NilCheck', [1]);
g.data('TooManyInstanceVariables', [1]);
g.data('UncommunicativeParameterName', [2]);
g.data('TooManyStatements', [2]);
        g.labels = {"0":"3/14"};
        g.draw();
