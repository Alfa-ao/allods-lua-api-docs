# common.GetSpecialStatInfo
Возвращает базовую информацию о Special-характеристике.

## Описание
```lua
common.GetSpecialStatInfo( specialStatId: SpecialStatId ): table | nil
```
Функция извлекает и возвращает базовую информацию о специальной характеристике (Special-стате) по её уникальному идентификатору. Если характеристика с указанным идентификатором не найдена или данные недоступны, функция возвращает `nil`.

## Список параметров
- **`specialStatId`** (`SpecialStatId`)
Уникальный идентификатор ресурса Special-стата.

## Возвращаемые значения
Возвращает `table` или `nil`.
Если информация успешно получена, возвращается таблица со следующими полями:
- **`name`** (`WString`) — полное название Special-стата.
- **`tooltipName`** (`WString`) — упрощенное название Special-стата.
- **`shortDescription`** (`WString`) — краткое описание Special-стата.
- **`type`** (`number`) — класс характеристики, соответствует значениям перечисления `ENUM_SpecialStatType`.

Возвращает `nil`, если Special-стат с заданным идентификатором не существует.

## Примеры
### Получение информации о Special-характеристике
```lua
local specialStatId = 12345 -- Идентификатор Special-стата
local statInfo = common.GetSpecialStatInfo( specialStatId )

if statInfo then
    LogInfo( "Название: ", statInfo.name )
    LogInfo( "Тип: ", statInfo.type )
else
    LogInfo( "Информация о Special-стате не найдена." )
end
```

## Смотрите также
- [ENUM_SpecialStatType](enums.specialstat#enum-specialstattype)