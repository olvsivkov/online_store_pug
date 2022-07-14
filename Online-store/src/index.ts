//import css from "./css/style.css";
import "./style.scss";
import * as _ from 'lodash';
import *  as pag from "./assets/photoList/Pag1.jpg"
import *  as Pag2 from "./assets/photoList/Pag2.png"
import *  as Pag3 from "./assets/photoList/Pag3.png"
import *  as Pag4 from "./assets/photoList/Pag4.png"
import *  as Pag5 from "./assets/photoList/Pag5.jpg"
import *  as Pag6 from "./assets/photoList/Pag6.jpg"
import *  as Pag7 from "./assets/photoList/Pag7.png"
import *  as Pag8 from "./assets/photoList/Pag8.jpg"
import *  as Pag9 from "./assets/photoList/Pag9.jpg"
import *  as Pag10 from "./assets/photoList/Pag10.jpg"
import *  as PagLogo from "./assets/photoList/Pag-Logo.jpg"
import *  as Basket from "./assets/photoList/basket.png"

export class TempComponent{
  public Pag1 = pag;
  public Pag2 = Pag2;
  public Pag3 = Pag3;
  public Pag4 = Pag4;
  public Pag5 = Pag5;
  public Pag6 = Pag6;
  public Pag7 = Pag7;
  public Pag8 = Pag8;
  public Pag9 = Pag9;
  public Pag10 = Pag10;
  public PagLogo = PagLogo;
  public basket = Basket;
}

import {counterInBasket} from './basket';
import {clearingBasket} from "./basket";
import {search} from "./search";
import {clearSearch} from "./search";


counterInBasket // добавляет\удаляет мопсов в/из корзины по одному

clearingBasket // полностью очищает корзину

search // поиск по странице

clearSearch // очистить строку поиска






