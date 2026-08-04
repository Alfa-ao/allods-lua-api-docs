# rules.GetWishmasterMultiplyingInfos

Возвращает информацию по последним уведомлениям о Волшебной лампе.

## Описание

```lua
rules.GetWishmasterMultiplyingInfos(): table
```

Функция возвращает таблицу с информацией по последним уведомлениям о Волшебной лампе. Возвращаемая таблица индексирована начиная с `0` и содержит вложенные таблицы описаний.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица, индексированная `[0..]`, с таблицами описаний по лампам. Каждая таблица описания содержит следующие поля:

- **`name`** (`WString`) - название Волшебной лампы.

- **`description`** (`WString`) - текстовое описание Волшебной лампы.

- **`isPreviousStepSuccess`** (`boolean`) - было ли предыдущее уведомление успешным, если его не было, всегда `true`.

- **`currentBonusValue`** (`number`) - текущий бонус (величина увеличения платежа).

- **`stepsLeft`** (`number`) - сколько еще попыток увеличения бонуса осталось.

- **`stepMultiplier`** (`number`) - если остались попытки увеличения бонуса, то величина увеличения в случае успеха.

- **`resourceId`** (`WishmasterResourceId`) - идентификатор Волшебной лампы.

Часть, доступная только в UI:

- **`image`** (`TextureId`) - текстура с иконкой Волшебной лампы.

## Примеры

### Обработка уведомлений

```lua
local infos = rules.GetWishmasterMultiplyingInfos()
for i = 0, GetTableSize( infos ) - 1 do
    local info = infos[ i ]
    if info.resourceId == eventParams.resourceId then
        LogInfo( "Multiplying: ", info.name )
    end
end
```

## Смотрите также

- [WishmasterResourceId](/api/types/WishmasterResourceId.md)