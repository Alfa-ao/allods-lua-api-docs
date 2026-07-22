# object.GetBuffDynamicInfo

Возвращает динамические параметры баффа: его длительность, оставшееся время действия и количество стаков.

## Описание

```lua
object.GetBuffDynamicInfo( Id: ObjectId ): table | nil
```

Функция возвращает динамические параметры баффа: его длительность, оставшееся время действия и количество стаков.

::: warning Замечание
Только эти параметры баффа могут измениться после его создания.
:::

## Список параметров

- **`Id`** (`ObjectId`) - Идентификатор экземпляра баффа.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с динамическими параметрами баффа или `nil`, если бафф не найден.

- **`durationMs`** (`number`) - Полное время действия баффа.

- **`remainingMs`** (`number`) - Время до окончания действия баффа.

- **`stackCount`** (`number`) - Количество уровней эффекта.

## Примеры

### Обработка изменения баффов

```lua
function buffManager:OnBuffsChanged( eventData )
    for objectId, changedBuffs in pairs( eventData.objects ) do
        if self.trackedObjects[ objectId ] then
            for buffId in pairs( changedBuffs ) do
                if self:GetBuffInfo( buffId ) then
                    if object.IsValidBuff( buffId ) then
                        self:UpdateBuff( objectId, buffId, object.GetBuffDynamicInfo( buffId ) )
                    else
                        self:RemoveBuff( objectId, buffId )
                    end
                end
            end
        end
    end
end
```

::: info Описание примера
В примере производится обработка события изменения баффов. Выполняется итерация по объектам и их баффам. Для каждого отслеживаемого баффа проверяется его валидность. Если бафф валиден, вызывается `object.GetBuffDynamicInfo` для получения актуальных параметров и обновления данных, иначе бафф удаляется из отслеживания.
:::

## Смотрите также

- [object.IsValidBuff](function.object.IsValidBuff)