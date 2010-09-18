var Utils = {
    deg2rad: function(angle) {
        return (angle/180)*Math.PI;
    },

    cos: function(angle) {
        return Math.cos(Utils.deg2rad(angle));
    },

    sin: function(angle) {
        return Math.sin(Utils.deg2rad(angle));
    },

    tan: function(angle) {
        return Math.tan(Utils.deg2rad(angle));
    },

    keys: {
        UP_ARROW : 38,
        DOWN_ARROW : 40,
        LEFT_ARROW : 37,
        RIGHT_ARROW : 39
    }
};
