import angularAMD from 'angularAMD';
import "./theme/dark";
import "./theme/shine";
import "./theme/default";

angularAMD.factory('echartsTheme', ['darkTheme', 'shineTheme','defaultTheme',
	(dark,shine,defaults) => {
    let themes = {
        dark: dark, 
        shine:shine,
        default:defaults 
    };
    return {
        get: function(name) {
            return themes[name] ? themes[name] : {};
        },
    };
}]);
