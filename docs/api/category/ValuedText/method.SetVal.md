# ValuedTextSafe:SetVal

Задает подстановочное значение для данного ValuedText.

## Описание

```lua
ValuedTextSafe:SetVal( key: string | WString, value: string | WString | ValuedObject | ValuedText )
```

Функция задает подстановочное значение для данного ValuedText. Дополнительные подробности: LuaApiDetails (закрытая ссылка).

## Список параметров

- **`key`** (`string` | `WString`) - тег, для которого устанавливается значение

- **`value`** (`string` | `WString` | `ValuedObject` | `ValuedText`) - устанавливаемое значение

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка подстановочных значений

```lua
valuedText:SetVal( "value1", userMods.ToWString( "Some text value" ) )
valuedText:SetVal( "value2", unit.GetSpellValuedObject( spellId ) )
valuedText:SetVal( "value3", otherValuedText )
```

## Смотрите также

- [unit.GetSpellValuedObject](/api/category/unit/function.unit.GetSpellValuedObject)