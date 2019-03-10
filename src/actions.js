// Action types
export const MOUSE_IDLE_IN_DISTANCE = "MOUSE_IDLE_IN_DISTANCE";
export const MOUSE_SLOWLY_MOVING = "MOUSE_SLOWLY_MOVING";
export const MOUSE_RAPIDLY_MOVING = "MOUSE_RAPIDLY_MOVING";
export const CHANGE_CHARATER = "CHANGE_CHARATER";
export const CHANGE_CHARATER_VISIBILITY = "CHANGE_CHARATER_VISIBILITY";

// Action creators
export const mouseIdle = (mouseX, mouseY) => ({
    type: MOUSE_IDLE_IN_DISTANCE,
    mouseX,
    mouseY
});

export const mouseSlowlyMoving = (mouseX, mouseY, movingSpeed) => ({
    type: MOUSE_SLOWLY_MOVING,
    mouseX,
    mouseY,
    movingSpeed
});

export const mouseRapidlyMoving = (mouseX, mouseY, movingSpeed) => ({
    type: MOUSE_RAPIDLY_MOVING,
    mouseX,
    mouseY,
    movingSpeed
});

export const changeCharater = (charaterName, charaterImageURL) => ({
    type: CHANGE_CHARATER,
    charaterName,
    charaterImageURL
});

export const changeCharaterVisibility = (charaterIsVisible) => ({
    type: CHANGE_CHARATER_VISIBILITY,
    charaterIsVisible
});