# TextViewSafe:GetTextStyle

Возвращает стиль текста.

<Badge type="warning" text="17.0.01.46" /> <Badge type="success" text="Release" />

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