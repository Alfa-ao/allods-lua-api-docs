# TextViewSafe:GetTextStyle

Возвращает стиль текста.

## Описание

::: success VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-Widget-TextStyle) <Badge type="warning" text="Process" />
Новая API

```lua
TextViewSafe:GetTextStyle(): table
```
:::

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