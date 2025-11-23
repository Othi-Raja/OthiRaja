import React from 'react';

export default function Uiux() {
  return (
    <div className=" bg-gray-5">
      <div className="max-w-7xl mx-auto">
        

        {/* Figma Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div>
          
            <div className="flex justify-center">
              <iframe 
                style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }} 
                width="100%" 
                height="450" 
                src="https://embed.figma.com/proto/xI04aXo0cv9IrKmELVdIYU/UI-projects?node-id=2016-57&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share" 
                allowFullScreen
                title="UI/UX Design Prototype"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
