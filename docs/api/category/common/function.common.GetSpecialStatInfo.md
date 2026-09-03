# common.GetSpecialStatInfo

Возвращает базовую информацию о Special-характеристике.

## Описание

```lua
common.GetSpecialStatInfo( specialStatId: SpecialStatId ): table | nil
```

Функция извлекает и возвращает базовую информацию о специальной характеристике (Special-стате) по её уникальному идентификатору. Если характеристика с указанным идентификатором не найдена или данные недоступны, функция возвращает `nil`.

## Список параметров

- **`specialStatId`** (`SpecialStatId`) - Уникальный идентификатор ресурса Special-стата.

## Возвращаемые значения

Возвращает `table` или `nil`. Если информация успешно получена, возвращается таблица со следующими полями:

- **`name`** (`WString`) - полное название Special-стата.

- **`tooltipName`** (`WString`) - упрощенное название.

- **`shortDescription`** (`WString`) - краткое описание.

- **`type`** (`number`) - класс характеристики, соответствует значениям перечисления `ENUM_SpecialStatType`.

## Примеры

### Получение информации о Special-характеристике
```lua
local statInfo = common.GetSpecialStatInfo( specialStatId )

if statInfo then
    LogInfo( "Название: ", statInfo.name )
    LogInfo( "Тип: ", statInfo.type )
else
    LogInfo( "Информация о Special-стате не найдена." )
end
```

## Смотрите также

- [ENUM_SpecialStatType](/api/enums/enums.ENUM_SpecialStatType.md)