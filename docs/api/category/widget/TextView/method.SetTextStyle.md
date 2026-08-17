# TextViewSafe:SetTextStyle

Изменяет стиль текста.

## Описание

::: success VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-Widget-TextStyle) <Badge type="warning" text="Process" />
Новая API

```lua
TextViewSafe:SetTextStyle( styleTable: table )
```
:::

Описание стиля представлено в `WidgetTextStyle`. Допускается передача частичной таблицы стиля. Поля, не заданные в таблице, остаются без изменений.

::: warning Замечание
Механически работает как переопределение (оверрайд) поля `textStyle` из ресурса виджета.
Изменение приводит к полному пересозданию `RenderValuedText`, не рекомендуется использовать без крайней необходимости.
:::

## Список параметров

- **`styleTable`** (`table`) - Таблица, описывающая стиль. Структура описана в `WidgetTextStyle`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Изменение стиля текста

```lua
wtTextView:SetTextStyle{ multiline = true, lineSpacing = 1.5 }
```

## Смотрите также

- [WidgetTextStyle](/articles/WidgetTextStyle.md)