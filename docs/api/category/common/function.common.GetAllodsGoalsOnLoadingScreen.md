# common.GetAllodsGoalsOnLoadingScreen
Возвращает список целей текущего аватара для отображения на загрузочном экране миссии.

## Описание
```lua
common.GetAllodsGoalsOnLoadingScreen(): table | nil
```
Функция возвращает таблицу с идентификаторами целей текущего аватара, подходящих по статусу и другим критериям для отображения на загрузочном экране миссии, или `nil`, если такие цели отсутствуют. Данные извлекаются из SystemState в случаях, когда активная миссия отсутствует.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` (индексация с 1), содержащую идентификаторы типа `GoalId`, или `nil`, если список целей недоступен или пуст.

## Примеры
### Получение и отображение случайной цели на загрузочном экране
```lua
local goals = common.GetAllodsGoalsOnLoadingScreen()
self.wtGoal:Show( goals ~= nil )
if goals then
  local _, goal = table.getrandom( goals )
  local info = goal:GetInfo()
  self.wtGoal.wtDescription:SetVal( "value", info.shortDescription or info.description )
  self.wtGoal.wtHeader:SetVal( "value", info.title )
end
```
::: info Описание примера
В примере запрашивается список доступных целей. Если список не пуст, с помощью `table.getrandom` выбирается случайная цель. Затем извлекается информация о цели через метод `GetInfo`, и полученные данные (заголовок и описание) передаются в соответствующие элементы пользовательского интерфейса.
:::

## Смотрите также
- [GoalId:GetInfo](GoalId.GetInfo)