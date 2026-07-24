# ResourceId:IsEqual

Проверяет текущий объект или ресурс на равенство с указанным.

## Описание

```lua
ResourceId:IsEqual( resourceId: ResourceId | WidgetSafe ): boolean
```

Метод реализован для всех типов `ResourceId` и для `WidgetSafe`, являющегося базовым типом для виджетов. Функция доступна у пользовательских ресурсов и виджетов.

## Список параметров

- **`resourceId`** (`ResourceId` | `WidgetSafe`) - Сравниваемый объект, ресурс или виджет.

## Возвращаемые значения

Возвращает `boolean` - `true`, если объекты или ресурсы равны.

## Примеры

### Сравнение объектов и ресурсов

```lua
local isWidgetEquals = widget1:IsEqual( widget2 )
local isSpellEquals = spellResourceId1:IsEqual( spellResourceId2 )
local isRecipeEquals = recipeResourceId1:IsEqual( recipeResourceId2 )
```