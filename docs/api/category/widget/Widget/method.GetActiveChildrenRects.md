# WidgetSafe:GetActiveChildrenRects

Возвращает массив прямоугольников, описывающих реальное положение виджета для всех видимых детей данного виджета рекурсивно.

## Описание

```lua
WidgetSafe:GetActiveChildrenRects( excludeType: number | nil ): table
```

Родительский виджет не попадает в список и его видимость не проверяется. Дети обходятся всегда, дети детей обходятся только если `clipContent` равно `false`.

::: warning Замечание
Для подсчета площади покрытия нужна предварительная обработка, так как прямоугольники могут пересекаться.
:::

## Список параметров

- **`excludeType`** (`number`(`ENUM_AddonType`) | `nil`) - Игнорируемый тип виджета.

::: info Перечисление
- **`ADDON_TYPE_NONE`** (`number`) - Невалидные или захардкоженные виджеты.

- **`ADDON_TYPE_USER`** (`number`) - Виджеты, созданные в пользовательских дополнениях.

- **`ADDON_TYPE_PROTECTED`** (`number`) - Виджеты, созданные в интерфейсе.
:::

## Возвращаемые значения

Возвращает `table` - Массив прямоугольников (индексация от 1), описывающих реальное положение виджета в формате `Rect`.

## Примеры

### Вычисление площади, занимаемой аддоном

```lua
local posConverterParams = common.GetPosConverterParams()
local screenArea = posConverterParams.realSizeX * posConverterParams.realSizeY
local addonArea = CalcArea( mainForm:GetActiveChildrenRects() )
LogInfo( string.format( "Addon [%s] occupy %.2f%% of screen", ADDON_NAME, addonArea / screenArea ) )
```

::: info Описание примера
Получаются параметры конвертера позиций для вычисления площади экрана. Затем извлекаются активные прямоугольники дочерних элементов главной формы и вычисляется их общая площадь. Результат выводится в лог в виде процента от площади экрана.
:::

## Смотрите также

- [common.GetPosConverterParams](../../common/function.common.GetPosConverterParams)
- [GetRealRect](ывапвыапв)
- [ENUM_AddonType](ывапвыпвыап)