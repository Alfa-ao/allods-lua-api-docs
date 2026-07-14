# avatar.GetAbilityValuedObject
Создает и возвращает новый экземпляр `ValuedObject` для пассивного умения.

## Описание
```lua
avatar.GetAbilityValuedObject( abilityId: number ): ValuedObject
```
Формирует новый экземпляр объекта `ValuedObject`, привязанный к пассивному умению. Тип объекта устанавливается как `VAL_OBJ_TYPE_ABILITY`. Текстовое представление содержит имя пассивного умения, а изображение — его иконку. В поле `Id` передается идентификатор ресурса пассивного умения. Возвращает созданный экземпляр `ValuedObject`.

::: warning Замечание
Поскольку `ValuedObject` является `userdata`, Lua работает с ним по ссылке, а не по значению.
:::

## Список параметров
- **`abilityId`** (`number`)
Идентификатор ресурса пассивного умения.

## Возвращаемые значения
`ValuedObject` - Новый экземпляр `ValuedObject`, содержащий данные о пассивном умении.

## Примеры
### Получение объекта пассивного умения
```lua
local abilityId = abilities[0]
local valuedObject = avatar.GetAbilityValuedObject( abilityId )
```