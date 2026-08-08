# TextViewSafe:GetTextStyle

Возвращает стиль текста.

## Описание

```lua
TextViewSafe:GetTextStyle(): table
```

Функция возвращает таблицу, описывающую стиль текста. Описание структуры стиля содержится в `WidgetTextStyle`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица, описывающая стиль текста.

## Примеры

### Получение стиля текста

```lua
LogInfo( wtTextView:GetTextStyle() )
```

## Смотрите также

- [WidgetTextStyle](/articles/WidgetTextStyle.md)