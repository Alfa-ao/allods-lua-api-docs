---
outline: deep
---

<!-- <pre class="center-by-longest">
Короткая строка
Очень длинная строка Очень длинная строка Очень длинная строка
Средняя <code>строка</code>
</pre> -->

# Lua API Release

Список изменений в игровом API.

## 18.0.0

### stateMainForm

::: tip <Badge type="warning" text="^18.0.0" /> {no-title}
Более недоступно в скриптах.

Используйте [`common.GetAddonMainForm( addonName )`](/api/category/common/function.common.GetAddonMainForm.md)
:::


```lua
local main = _G.stateMainForm:  -- [!code --]
    GetChildChecked( "AlchemyV2" ): -- [!code --]
    GetChildChecked( "MainFrame" )
local main = common.GetAddonMainForm( "AlchemyV2" ): -- [!code ++]
    GetChildChecked( "MainFrame" )
```

---

### WidgetSafe

::: tip <Badge type="warning" text="^18.0.0" /> {no-title}
Рекурсивный поиск детей объявляется **deprecated** и планируется к удалению.

[`WidgetSafe:GetChildChecked( name: string, recursive: boolean|nil )`](/api/category/widget/Widget/method.GetChildChecked.md)

[`WidgetSafe:GetChildUnchecked( name: string, recursive: boolean|nil )`](/api/category/widget/Widget/method.GetChildUnchecked.md)

Параметр:

- **`recursive`** - <Badge type="danger" text="deprecated" />
:::

```lua
local main = common.GetAddonMainForm( "AlchemyV2" ):
    GetChildChecked( "MainFrame" )

local rolls = main:GetChildChecked( "Alchemy" ):
    GetChildChecked( "Rolls", true ) -- [!code --]
    GetChildChecked( "Game" ): -- [!code ++]
    GetChildChecked( "View" ): -- [!code ++]
    GetChildChecked( "Rolls" ) -- [!code ++]
```

---

Дополняется...