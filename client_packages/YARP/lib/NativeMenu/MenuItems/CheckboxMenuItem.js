'use strict';
/**
 * Implements a checkbox menu item.
 */
class CheckboxMenuItem extends NativeMenu.MenuItem {
  /**
   *Creates an instance of CheckboxMenuItem.
   * @extends {NativeMenu.MenuItem}
   * @param {String} displayText
   * @param {String} [caption='']
   * @param {Number} [badge=NaN]
   * @param {Boolean} [data={}]
   * @memberof CheckboxMenuItem
   */
  constructor(displayText, caption, badge, data) {
    super(displayText, caption, badge, data);
    this.toggled = false;
    this.addOnClickEvent({
      trigger: (toggled) => {
        this.toggled = !this.toggled;
      },
    });
  }

  /**
   * Draws item on screen.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} yCaption
   * @memberof CheckboxMenuItem
   */
  draw(x, y, yCaption) {
    super.draw(x, y, yCaption);
    NativeMenu.CommonMenuTexture.draw(this.toggled ? 'shop_box_tick' : 'shop_box_blank', x + NativeMenu.MainMenu.MENU_DRAW_OFFSET_X - (0.015 * NativeMenu.MainMenu.SCREEN_RATIO_WIDTH), y + NativeMenu.MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * NativeMenu.MainMenu.SCREEN_RATIO_WIDTH), (0.035 * NativeMenu.MainMenu.SCREEN_RATIO_HEIGHT), new NativeMenu.Color(), 0);
  }
}

exports = CheckboxMenuItem;
