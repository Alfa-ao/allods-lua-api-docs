# rules.WishmasterRollMultiplying

Инициирует попытку увеличения бонуса для Волшебной лампы.

## Описание

```lua
rules.WishmasterRollMultiplying( resourceId: WishmasterResourceId )
```

Функция инициирует попытку увеличения бонуса для Волшебной лампы по указанному идентификатору ресурса.

## Список параметров

- **`resourceId`** (`WishmasterResourceId`) - Идентификатор Волшебной лампы.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Увеличение бонуса Волшебной лампы

```lua
rules.WishmasterRollMultiplying( eventParams.resourceId )
```

## Смотрите также

- [WishmasterResourceId](/api/types/WishmasterResourceId.md)